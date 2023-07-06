import Featured from "../../components/featured/featured.component";
import FeaturedProperties from "../../components/featuredProperties/featuredProp.component";
// import Footer from "../../components/footer/footer.component";
import Header from "../../components/Header/header.component";
import MailList from "../../components/mailList/mailList.component";
import PropertyList from "../../components/propertyList/property-list.component";
import Footer from "../../components/footer/footer.component";
import './home.styles.scss'
const Home = () => {
  return (
    <div>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Browse by home title</h1>
        <FeaturedProperties/>
        <MailList/>
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;
