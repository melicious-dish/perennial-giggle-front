import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addPlant, plantCreate, plantClear } from '../actions';
import { Card, CardSection, Button } from './common';
import PlantForm from './PlantForm.jsx';

// Plant create Form
// import { Image } from 'react-native';
// import { PhotoUpload } from 'react-native-photo-upload';

// import { ImagePicker } from 'react-native-image-picker';
// import { ImageResizer } from 'react-native-image-resizer';

class PlantCreate extends Component {
  componentDidMount() {
    this.props.plantClear();
  }

  onButtonPress() {
    const {
      genusSpecies,
      commonName,
      nickname,
      taskType,
      taskFrequency,
      taskInterval,
      plantImages,
    } = this.props;

    this.props.plantCreate({
      genusSpecies,
      commonName,
      nickname,
      taskType,
      taskFrequency,
      taskInterval,
      plantImages,
    });
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <PlantForm {...this.props} />
          <CardSection>
            <Button onUserPress={this.onButtonPress.bind(this)}>Create</Button>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {
    genusSpecies,
    commonName,
    nickname,
    taskType,
    taskFrequency,
    taskInterval,
    plantImages,
  } = state.plantForm;

  return {
    genusSpecies,
    commonName,
    nickname,
    taskType,
    taskFrequency,
    taskInterval,
    plantImages,
  };
};

export default connect(
  mapStateToProps,
  {
    addPlant,
    plantCreate,
    plantClear,
  }
)(PlantCreate);
