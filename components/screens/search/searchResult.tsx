import { StyleSheet, Text, View } from "react-native";
import News_List from "../home/news_list";

const Search_Result = () => {
    return ( 
        <>
        
        <View style={styles.result_container} >
            <View style={styles.result_header} >
                <Text style={styles.result} >
                About 11,130,000 results for <Text style={styles.search_word} >COVID New Variant.</Text>
                </Text>
            </View>
            <News_List styles={{width:"100%"}} />
        </View>

        </>
     );
}
 
export default Search_Result;


const styles = StyleSheet.create({
    result_container:{
        width:"100%",
        paddingHorizontal:18,
        marginTop:13
    },

    result_header:{
        width:"100%",
        marginBottom:13
    },
    result:{
        fontWeight:"400",
        fontSize:16,
        lineHeight:19.1,
        color:'#041E2F',
        textAlign:"center"
    },
    search_word:{
        fontFamily:"Nunito",
        fontWeight:"700",
        fontSize:16,
        fontStyle:"italic",
        color:"#173418",
        lineHeight:19.1,
    }
})