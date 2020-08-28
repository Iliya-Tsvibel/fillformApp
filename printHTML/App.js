import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  Button,
} from 'native-base';
import {View, Platform} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

export default class App extends Component {
  state = {
    currentSelectedPrinter: null,
  };

  // iOS Only
  choosePrinter = async () => {
    const currentSelectedPrinter = await RNPrint.selectPrinter({
      x: 100,
      y: 100,
    });
    this.setState({currentSelectedPrinter});
  };

  // @NOTE iOS Only
  silentPrint = async () => {
    if (!this.state.currentSelectedPrinter) {
      alert('Must Select Printer First');
    } else {
      await RNPrint.print({
        printerURL: this.state.currentSelectedPrinter.url,
        html: '<h1>Silent Print</h1>',
      });
    }
  };

  async printHTML() {
    await RNPrint.print({
      html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>',
    });
  }
  async printPDF() {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1><p>Paragraph here</p>',
      fileName: 'demo pdf',
      base64: true,
    });

    await RNPrint.print({filePath: results.filePath});
  }

  async printRemotePDF() {
    await RNPrint.print({
      filePath: 'https://graduateland.com/api/v2/users/jesper/cv',
    });
  }

  // iOS UI Only
  iosOptions = () => {
    return (
      <View>
        <Button
          block
          bordered
          style={{margin: 15}}
          onPress={this.choosePrinter}>
          <Text>Choose Printer</Text>
        </Button>
        <Button block bordered style={{margin: 15}} onPress={this.silentPrint}>
          <Text>Silent Prinitng</Text>
        </Button>
      </View>
    );
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Print HTML/PDF as a Document</Title>
          </Body>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}>
          {Platform.OS === 'ios' && this.iosOptions()}
          <Button block bordered style={{margin: 15}} onPress={this.printHTML}>
            <Text>Print HTML</Text>
          </Button>
          <Button block bordered style={{margin: 15}} onPress={this.printPDF}>
            <Text>Print PDF</Text>
          </Button>
          <Button
            block
            bordered
            style={{margin: 15}}
            onPress={this.printRemotePDF}>
            <Text>Print External Located PDF File</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}