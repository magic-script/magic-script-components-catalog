import React from 'react';
import { Button, FileSystem, GridLayout, LinearLayout, Platform, Text, TextEdit, View } from 'magic-script-components';

class SceneFileSystem extends React.Component {

  constructor(props) {
    super(props);
    const folderPath = (Platform.OS === 'Lumin') ? '/documents/C1/' : '';
    this.filePath = folderPath + 'sample.txt';
    this.state = { currentPath: '', text: '' };
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    FileSystem.readFile(this.filePath, 'utf8')
    .then(content => this.setState({ currentPath: this.filePath, text: content }))
    .catch(e => {
      console.log('Unable to load file: ', e.message);
      this.setState({ currentPath: 'File does not exist.', text: '' })
    });
  }

  onSave = () => this.writeFile(this.state.text, false)

  onDelete = () => {
    FileSystem.deleteFile(this.filePath)
    .then(() => this.onLoad())
    .catch(e => this.onLoad())
  }

  onCreate = () => this.writeFile('', true);

  onMove = () => {
    var elements = this.filePath.split('/');
    elements.pop();
    elements.push(`sample_${Date.now()}.txt`);
    const newFilePath = elements.join('/');
    FileSystem.moveFile(this.filePath, newFilePath)
    .then(() => {
      this.filePath = newFilePath;
      this.setState({ currentPath: this.filePath })
    })
    .catch(e => console.log('Unable to move file: ', e.message));
  }

  onTextChanged = (event) => this.setState({ text: event.Text });

  writeFile(content, saveState = false) {
    FileSystem.writeFile(this.filePath, content, 'utf8').then(() => {
      if (saveState) {
        this.setState({ currentPath: this.filePath, text: content });
      }
    })
    .catch(e => console.log('Unable to write file: ', e.message));
  }

  render() {
    const { currentPath, text } = this.state;
    return (
      <View localPosition={this.props.localPosition}>
        <LinearLayout
          alignment={'center-center'}
          defaultItemAlignment={'center-center'}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
        >
          <TextEdit 
            hint={'Write your text here'}
            multiline
            width={0.9} 
            height={0.9} 
            onTextChanged={this.onTextChanged}
            text={text}
            textPadding={[0.03, 0.03, 0.03, 0.03]}
            textSize={0.08}
          />
          <Text
            boundsSize={{ boundsSize: [0.9, 0.1], wrap: true }}
            text={currentPath}
            textColor={[1,1,1,0.4]}
            textSize={0.06}
          />
          <GridLayout
            columns={2}
            defaultItemAlignment={'center-left'}
            defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
            itemAlignment={[
              { column: 0, row: 0, alignment: 'center-right' },
              { column: 0, row: 1, alignment: 'center-right' },
              { column: 0, row: 2, alignment: 'center-right' }
            ]}
          >
            <Button textSize={0.08} onClick={this.onLoad}>Load</Button>
            <Button textSize={0.08} onClick={this.onSave}>Save</Button>
            <Button textSize={0.08} onClick={this.onDelete}>Delete</Button>
            <Button textSize={0.08} onClick={this.onCreate}>Create</Button>
            <Button textSize={0.08} onClick={this.onMove}>Move</Button>
          </GridLayout>
        </LinearLayout>
      </View>
    );
  }
}

export { SceneFileSystem };
