# React Native Lab

## Require:
- Clone project
- Install dependencies using npm or yarn
- Implement TODO list

## Screenshot:
Before:
<p align='center'>
  <span>
      <image width="200" src="https://i.imgur.com/apUBeW7.png" />
      <image width="200" src="https://i.imgur.com/8jOwv1W.png" />
  </span>
</p>
After:
<p align='center'>
  <span>
      <image width="200" src="https://i.imgur.com/apUBeW7.png" />
       <image width="200" src="https://i.imgur.com/jsOVs7z.png" />
  </span>
</p>

## Ref
**Notes App React-Native with Redux**, https://github.com/DwiNugroho/NotesApp-ReactNative-Redux
## Solution
For list TODO at `EditNote.js`

    // Some comments
    
	render() {
		return(
			<View>
				<View style={styles.header}>
					<TouchableOpacity style={styles.left} onPress={() => this.props.navigation.goBack()}>
						<Image source={require('../assets/icons/left-arrow.png')} />
					</TouchableOpacity>
					<View style={styles.center}>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Edit Note</Text>
					</View>
					<TouchableOpacity onPress={this.editNote} style={styles.right}>
						<Image source={require('../assets/icons/checked.png')} />
					</TouchableOpacity>
				</View>
				<ScrollView style={styles.ParentView}>
					<TextInput
						style={styles.title} 
						value={this.state.title}
						onChangeText={this.titleChange}
						placeholder="ADD TITLE ..." 
					/>
					<TextInput 
						style={styles.description}
						value={this.state.note}
						multiline= {true}
						numberOfLines={10}
						onChangeText={this.noteChange}
						placeholder="ADD DESCRIPTION ..." 
					/>
					<Picker
					  selectedValue={this.state.category_id}
					  style={{width: '100%'}}
					  onValueChange={(itemValue, itemIndex) =>
					    this.setState({
					    	category_id: itemValue,
					    })
					  }>
					  <Picker.Item key={null} label="select category..." value={null} />
					  {
					  	this.props.category.data.map((item) => {
					  		return(
					  			<Picker.Item key={item.id} label={item.category_name} value={item.id} />
					  		)
					  	})
					  }
					</Picker>
				</ScrollView>
			</View>
		)
	}
