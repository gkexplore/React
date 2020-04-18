import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { getDecks } from '../utils/api'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { AppLoading } from 'expo'
import { purple, white, grey, lightPurp, red } from "../utils/colors"

class DecksScreen extends Component{
  
    constructor(props){
        super(props)
        this.state = {
            ready: false,
        }
    }
  
    componentDidMount(){
        const { dispatch } = this.props
        getDecks()
        .then((decks) => {
            console.log('inside componentDidMount', decks)
            dispatch(receiveDecks(decks))
            this.setState(()=>({
                ready: true
            }))
        })
    }

    render(){
        const { ready, decks } = this.props
        const screenHeight = Dimensions.get('window').height
        if(ready === false){
            return <AppLoading/>
        }
        return(
            
            <View style={{ Height: "auto", maxHeight: screenHeight}}>
            <ScrollView>
                {
                    Object.keys(decks).map((key)=>(
                        
                    <TouchableOpacity key={key} style={styles.item}
                        onPress={() =>
                            this.props.navigation.navigate("DeckDetailsScreen", { deckId: key })
                        }
                        >
                       <Text style={{fontSize: 20, fontWeight: 'bold'}}>{key}</Text>
                       {(decks[key].questions?
                       <Text >{decks[key].questions.length} cards</Text>
                       :
                       <Text>0 cards</Text>
                       )}
                  </TouchableOpacity>))
                }
                
            </ScrollView>
        </View>
        )
    }
}

function mapStateToProps(decks){
    console.log('state redux', decks)
    return {
        decks
    }
}

export default connect(mapStateToProps)(DecksScreen)

const styles = StyleSheet.create({
    item: {
      flex: 1, justifyContent: 'center', alignItems:'center',
      height:100,
      width: 400,
      backgroundColor: white,
      borderRadius: Platform.OS === "ios" ? 16 : 4,
      padding: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 17,
      shadowRadius: 3,
      shadowOpacity: 0.8,
      shadowColor: "rgba(0,0,0,0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      }
    }
  });