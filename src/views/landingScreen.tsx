import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import {useLyrics} from '../services/song.service';
import FormField from '../components/FormField';
import AppButton from '../components/AppButton';
import color from '../constants/color';

type ComponentProps = {
  navigation: any;
};

const OrgAddDotNumberForm: React.FC<ComponentProps> = () => {
  const {isLoading, mutate: requestLyrics} = useLyrics();
  let [loading, setLoading] = useState<boolean>(false);
  const [artist, setArtist] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [lyrics, setLyrics] = useState<string>();

  const onPressNext = () => {
    setLoading(true);
    requestLyrics(
      {
        artist: artist,
        title: title,
      },
      {
        onSuccess: ({Error, data}) => {
          if (Error) {
            console.log('ERROR: ', Error);
            setLoading(false);
            setLyrics('');
          } else {
            console.log('ResponseData: ', data?.lyrics);
            setLyrics(data?.lyrics);
          }
          setLoading(false);
        },
        onError: Error => {
          setLoading(false);
          setLyrics('');
          console.log('🚀 ERROR: ', JSON.stringify(Error));
          Alert.alert('Error!', `${Error?.message}`, [
            {
              text: `OK`,
              onPress: () => {},
            },
          ]);
        },
      },
    );
  };

  return (
    <View style={styles.flexView}>
      <View style={styles.formStyle}>
        <FormField
          autoCorrect={false}
          keyboardType="default"
          name={artist}
          placeholder="Enter Artist Name"
          textContentType="none"
          handleChange={name => {
            console.log('Artist: ', name);
            setArtist(name);
          }}
          setFieldTouched={name => console.log('name: ', name)}
        />
        <FormField
          autoCorrect={false}
          keyboardType="default"
          name={title}
          placeholder="Enter Title"
          textContentType="none"
          handleChange={name => {
            console.log('Title: ', name);
            setTitle(name);
          }}
          setFieldTouched={name => console.log('name: ', name)}
        />
        {lyrics && lyrics !== '' ? (
          <>
            <Text style={styles.titleText}>LYRICS</Text>
            <ScrollView style={styles.scrollStyle}>
              <View style={styles.lyricsView}>
                <Text>{lyrics}</Text>
              </View>
            </ScrollView>
          </>
        ) : null}
      </View>
      <AppButton
        title="Search"
        onPress={onPressNext}
        loading={loading}
        disabledValue={loading}
        color={color.ThemeColor}
        width="100%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  formStyle: {
    flex: 1,
  },
  lyricsView: {
    padding: 10,
  },
  scrollStyle: {
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default OrgAddDotNumberForm;
