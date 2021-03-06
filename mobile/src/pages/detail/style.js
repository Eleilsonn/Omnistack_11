import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Contants.statusBarHeight + 20
    },
    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    incidentsList:{
        marginTop: 32
    },
    incident:{
        marginTop:48,
        padding:24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom: 16
    },
    incidentProperty:{
        fontSize: 14,
        color:'#41414d',
        fontWeight:'bold',
        marginTop: 24
    },
    incidentValue:{
        marginTop:8,
        fontSize:15,
        color:'#737380'
    },
    contactBox:{
        padding:24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom: 16
    },
    heroTitle:{
        fontSize:20,
        fontWeight:'bold',
        lineHeight: 30,
        color:'#13131a'
    },
    heroDescription:{
        fontSize:15,
        color:'#737380',
        marginTop:16
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 16
    },
    action:{
        backgroundColor:'#e02041',
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    actionText:{
        color:'#fff',
        fontSize: 15,
        fontWeight:'bold'
    }
});