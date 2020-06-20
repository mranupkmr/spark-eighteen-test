import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import HomeLeft from "./HomeLeft";
import changeCountry from "../redux/actions/home";
import { connect } from "react-redux";
import HomeRight from "./HomeRight";

class Home extends React.Component {
    handleChange = (e,idx) => {
        const {name,checked} = e.target;
        let {countries} = this.props.Home;
        countries[name][idx]["checked"]=checked
        this.props.changeCountry(countries);
    }
    handleRemove = (obj,idx) => {
        const {name,checked} = obj;
        let {countries} = this.props.Home;
        console.log(name,checked)
        countries[name][idx]["checked"]=checked
        this.props.changeCountry(countries);
    }
    render() {
        const {countries} = this.props.Home;
        return (
            <>
                <Header />
                <Container>
                    <div className="home-body row">
                        <HomeLeft countries={countries} handleChange={this.handleChange}/>
                        <HomeRight countries={countries} handleRemove={this.handleRemove}/>
                    </div>
                </Container>
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        changeCountry: data => dispatch(changeCountry(data))
    };
};
const mapStateToProps = state => {
    return{
        Home: state.home
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
