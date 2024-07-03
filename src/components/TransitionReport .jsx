import PropTypes from "prop-types";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  titleName: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  header: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
    textTransform: "uppercase",
  },
  subHeader: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    backgroundColor: "#f2f2f2",
    padding: 5,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 5,
    fontSize: 12,
    textAlign: "center",
  },
});

const TransitionReport = ({ data }) => {
  const calculateSubtotal = () => {
    return data.purchasedProductLists.reduce((subtotal, item) => {
      return subtotal + item.product.price * item.qty;
    }, 0);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>ZUGU</Text>
          <Text style={styles.header}>Transition Report</Text>
          <Text style={styles.subHeader}>Customer Info</Text>
          <Text style={styles.subHeader}>
            {data.user.firstName} {data.user.lastName}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Shipping Info</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Region</Text>
              <Text style={styles.tableColHeader}>Address</Text>
              <Text style={styles.tableColHeader}>Apartment</Text>
              <Text style={styles.tableColHeader}>City</Text>
              <Text style={styles.tableColHeader}>Postal Code</Text>
              <Text style={styles.tableColHeader}>Phone</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCol}>{data.shippingInfo.region}</Text>
              <Text style={styles.tableCol}>{data.shippingInfo.address}</Text>
              <Text style={styles.tableCol}>{data.shippingInfo.apartment}</Text>
              <Text style={styles.tableCol}>{data.shippingInfo.city}</Text>
              <Text style={styles.tableCol}>
                {data.shippingInfo.postalCode}
              </Text>
              <Text style={styles.tableCol}>
                {data.shippingInfo.phoneNumber}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Payment Info</Text>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>Card Number</Text>
            <Text style={styles.tableColHeader}>Exp Date</Text>
            <Text style={styles.tableColHeader}>Security Code</Text>
            <Text style={styles.tableColHeader}>Name on Card</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{data.payment.cardNumber}</Text>
            <Text style={styles.tableCol}>{data.payment.expDate}</Text>
            <Text style={styles.tableCol}>{data.payment.securityCode}</Text>
            {data.payment.nameOnCard ? (
              <Text style={styles.tableCol}>{data.payment.nameOnCard}</Text>
            ) : (
              <View style={styles.tableCol} />
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Products</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Name</Text>
              <Text style={styles.tableColHeader}>Price</Text>
              <Text style={styles.tableColHeader}>Category</Text>
              <Text style={styles.tableColHeader}>Stock</Text>
              <Text style={styles.tableColHeader}>Quantity</Text>
            </View>
            {data.purchasedProductLists.map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCol}>{item.product.name}</Text>
                <Text style={styles.tableCol}>{item.product.price}</Text>
                <Text style={styles.tableCol}>
                  {item.product.category.name}
                </Text>
                <Text style={styles.tableCol}>{item.product.stock}</Text>
                <Text style={styles.tableCol}>{item.qty}</Text>
              </View>
            ))}
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Subtotal</Text>
              <Text style={styles.tableCol} colSpan={4}>
                {calculateSubtotal().toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

TransitionReport.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TransitionReport;
