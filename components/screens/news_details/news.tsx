import { ScrollView, StyleSheet, Text, View } from "react-native";

const News = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.news}>
          LONDON — Cryptocurrencies “have no intrinsic value” and people who
          invest in them should be prepared to lose all their money, Bank of
          England Governor Andrew Bailey said. Digital currencies like bitcoin,
          ether and even dogecoin have been on a tear this year, reminding some
          investors of the 2017 crypto bubble in which bitcoin blasted toward
          $20,000, only to sink as low as $3,122 a year later. Asked at a press
          conference Thursday about the rising value of cryptocurrencies, Bailey
          said: “They have no intrinsic value. That doesn’t mean to say people
          don’t put value on them, because they can have extrinsic value. But
          they have no intrinsic value.” “I’m going to say this very bluntly
          again,” he added. “Buy them only if you’re prepared to lose all your
          money.” Bailey’s comments echoed a similar warning from the U.K.’s
          Financial Conduct Authority. “Investing in cryptoassets, or
          investments and lending linked to them, generally involves taking very
          high risks with investors’ money,” the financial services watchdog
          said in January. “If consumers invest in these types of product, they
          should be prepared to lose all their money.” Bailey, who was formerly
          the chief executive of the FCA, has long been a skeptic of crypto. In
          2017, he warned: “If you want to invest in bitcoin, be prepared to
          lose all your money.”
        </Text>
      </ScrollView>
    </>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 18,
    paddingTop: 80,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: "100%",
    position: "relative",
    top: -40,
  },
  news: {
    fontSize: 14,
    color: "#2E0505",
    textAlign: "justify",
    lineHeight: 21,
    fontWeight: "600",
    marginBottom: 130,
    // fontFamily:"Nunito"
  },
});
