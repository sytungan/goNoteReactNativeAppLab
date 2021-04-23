import React, { Component } from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Picker,
	StyleSheet,
	Image,
	ScrollView
} from 'react-native'

import { connect } from 'react-redux';

import { getCategory } from '../public/redux/action/category';
import { patchNote } from '../public/redux/action/notes';


class EditNote extends Component {
	constructor (props) {
		super(props)
		console.log("kkekeke",props)
		this.state = {
			id: this.props.route.params.id,
			title: this.props.route.params.title,
			note: this.props.route.params.note,
			category_id: this.props.route.params.category_id,
		}
	}

	titleChange = (value) => {
		this.setState({
			title: value
		})
	}

	noteChange = (value) => {
		this.setState({
			note: value
		})
	}

	editNote = () => {
		if (this.state.category_id != null) {

			this.props.dispatch(patchNote(this.state))

			this.props.navigation.goBack()

		} else {
			this.setState({
				validateCategory: 'PLease Select the Category First!'
			})
		}

		
	}

	render() {
		return(
			<View>
				<ScrollView style={styles.ParentView}>
				<Text> ToDo List:
				// TODO: Create a TextInput to read Title content from user. Using *this.state.titleChange* to handle change state 

				// TODO: Create a TextInput to read Note content from user. Using *this.state.noteChange* to handle change state 
				
				// TODO: Create a list category choice. Don't forget to set *category_id* to value that user choose 
				</Text>
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		category: state.category
	}
}

export default connect(mapStateToProps)(EditNote)

const styles = StyleSheet.create({
	ParentView: {
		padding: 30,
	},
	title:{
		fontSize: 20,
		textAlignVertical: 'top'
	},
	description: {
		fontSize: 20,
		textAlignVertical: 'top'
	},
	picker: {
		height: 50, 
		width: 200,
		top: 10,
		borderWidth: 1,
	},
	header: {
		height: 60, 
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10,
		backgroundColor: 'white',
		elevation: 7
	},
	center: {
		flex: 1, 
		alignItems: 'center',
	},
	left: {
		flex: 1,
	},
	right: {
		flex: 1,
		alignItems: 'flex-end',
	}
})