import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'

const NOTIFICATION_KEY = 'UdaciCards:notifications'

export function timeToString(time = Date.now()) {
    const date = new Date(time);
    const todayUTC = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    return todayUTC.toISOString().split("T")[0];
}


export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Log your stats!',
        body: "👋 don't forget to log your stats for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            const tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMintutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
                    .catch(function (error) {
                        console.log('An error has occurred while setting location permissions!')
                        throw error
                    })
            }
        })
}