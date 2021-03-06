import * as React from "react";
import { Container } from "native-base";
import { Col, Grid } from "react-native-easy-grid";

import SalesList from "../SalesList/index";
import SalesReceipt from "../SalesReceipt/index";

import ViewOrderComponent from "../../components/ViewOrderComponent";

class Sales extends React.PureComponent {
  onItemClick = index => this.props.onItemClick(index);
  onReceiptLineDelete = index => this.props.onReceiptLineDelete(index);
  onCategoryClick = (id, index) => this.props.onCategoryClick(id, index);

  renderOrder() {
    const {
      onCloseViewOrder,
      isLoadingOrder,
      onTableClick,
      orders,
    } = this.props;
    return (
      <ViewOrderComponent
        orders={orders}
        length={orders.length}
        onTableClick={onTableClick}
        isLoadingOrder={isLoadingOrder}
        onCloseViewOrder={onCloseViewOrder}
      />
    );
  }

  render() {
    const {
      currency,
      itemData,
      navigation,
      categoryData,
      searchStatus,
      onCloseClick,
      onSearchClick,
      bluetoothStatus,
      salesListStatus,
      onBarcodeRead,
      onBluetoothScan,
      onEndReached,
      itemsLength,
      categoryLengths,
      barcodeScannerInput,
      onChangeSalesSearchText,
      onChangeBarcodeScannerInput,
      selectedCategoryIndex,
      onLongPressItem,

      // Sales Receipt
      receiptDefault,
      isDiscountsEmpty,
      onViewOrders,
      onDeleteClick,
      onBarcodeClick,
      onDiscountClick,
      onPaymentClick,
      onReceiptLineEdit,

      // New feature
      isViewingOrder,
      onTakeAwayClick,
    } = this.props;

    return (
      <Container>
        <Grid>
          <Col size={1}>
            {isViewingOrder ? (
              this.renderOrder()
            ) : (
              <SalesList
                currency={currency}
                itemData={itemData}
                navigation={navigation}
                categoryData={categoryData}
                searchStatus={searchStatus}
                bluetoothStatus={bluetoothStatus}
                salesListStatus={salesListStatus}
                onChangeSalesSearchText={onChangeSalesSearchText}
                onChangeBarcodeScannerInput={onChangeBarcodeScannerInput}
                onCloseClick={onCloseClick}
                onItemClick={this.onItemClick}
                barcodeScannerInput={barcodeScannerInput}
                onSearchClick={onSearchClick}
                onBarcodeRead={onBarcodeRead}
                selectedCategoryIndex={selectedCategoryIndex}
                onBluetoothScan={onBluetoothScan}
                onCategoryClick={this.onCategoryClick}
                onEndReached={onEndReached}
                itemsLength={itemsLength}
                categoryLengths={categoryLengths}
                onLongPressItem={onLongPressItem}
              />
            )}
          </Col>
          <Col size={1}>
            <SalesReceipt
              currency={currency}
              receipt={receiptDefault}
              isDiscountsEmpty={isDiscountsEmpty}
              onViewOrders={onViewOrders}
              onDeleteClick={onDeleteClick}
              onBarcodeClick={onBarcodeClick}
              onPaymentClick={onPaymentClick}
              onDiscountClick={onDiscountClick}
              onReceiptLineEdit={onReceiptLineEdit}
              onReceiptLineDelete={this.onReceiptLineDelete}
              onTakeAwayClick={onTakeAwayClick}
            />
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default Sales;
