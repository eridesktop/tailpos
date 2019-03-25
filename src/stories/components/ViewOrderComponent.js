import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import {
  Header,
  Left,
  Body,
  Right,
  Icon,
  Button,
  Container,
  Content,
  Text,
  Spinner,
} from "native-base";

import OrderItemComponent from "./OrderItemComponent";

class ViewOrderComponent extends React.PureComponent {
  renderOrderItem = ({ item, index }) => {
    const { onTableClick } = this.props;
    return (
      <OrderItemComponent
        index={index}
        tableNo={item.table_no}
        onTableClick={onTableClick}
      />
    );
  }

  renderOrders() {
    const { orders } = this.props;
    return (
      <FlatList
        data={orders}
        numColumns={2}
        renderItem={this.renderOrderItem}
      />
    );
  }

  render() {
    const {
      length,
      isLoadingOrder,
      onCloseViewOrder,
    } = this.props;

    return (
      <Container>
        <Header>
          <Left>
            <Text style={styles.leftText}>
              Orders ({length})
            </Text>
          </Left>
          <Body />
          <Right>
            <Button transparent onPress={onCloseViewOrder}>
              <Icon name="close" />
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
          {
            isLoadingOrder
            ? <Spinner color="#4b4c9d" />
            : this.renderOrders()
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  leftText: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    paddingTop: 15,
  },
});

export default ViewOrderComponent;