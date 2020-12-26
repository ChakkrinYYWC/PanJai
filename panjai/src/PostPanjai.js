import React,{useEffect,useState} from 'react';
import { connect } from 'react-redux';
import * as action from './action/postPanjai'

const PostPanjai = (props) => {
    useEffect(()=>{
        props.fetchAllPostPanjai()
    }, [])
    return (<div>from post</div>
    );
}

const mapStateToProps = state=>({
    postPanjaiList : state.postPanjai.list
})

const mapActionToProps = {
    fetchAllPostPanjai: action.fetchAll
}

export default connect(mapStateToProps,mapActionToProps)(PostPanjai);