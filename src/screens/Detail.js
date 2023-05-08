import React, { Component } from "react";
import { Text, View, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#212121" }}>
        <StatusBar backgroundColor="#1e88e5" />
        <View
          style={{
            backgroundColor: "#2196f3",
            paddingVertical: 15,
            elevation: 3,
            flexDirection: "row",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon
              style={{ marginRight: 10 }}
              name="chevron-left"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Detail
          </Text>
        </View>

        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          {this.props.route.params.judul}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {this.props.route.params.deskripsi}
        </Text>
      </View>
    );
  }
}

export default Detail;
