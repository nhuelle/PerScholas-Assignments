// Making main React class for the project.
class MainComponents extends React.Component{
  render() {
      return(
        <div className={this.props.className}>
            <h4>{this.props.name}</h4>
            <h5>{this.props.count}</h5>

        </div>
      )
  }
}

//Making React class for divs/boxes.
class Main extends React.Component {
  render() {
    return(
      <div className="main">
         <MainComponents className="reviews" name="Reviews" count="1,281" />
         <MainComponents className="averageRating" name="Average Ratings" count="4.6" />
         <MainComponents className="sentimentAnalysis" name="Sentiment Analysis" count="960" />
         <MainComponents className="websiteVisitors" name="Website Visitors" count="821" />
      </div>
    )
  }
}

//Making React class for sidebar w/dashboard, widgets, etc.
class SideBar extends React.Component { 
   render() { 
         return( 
           <div className="sidebar">
               <h2>Dashboard</h2>
               <h2>Widget</h2>
               <h2>Reviews</h2>
               <h2>Customers</h2>
               <h2>Online Analysis</h2>
               <h2>Settings</h2>
            </div>
          )
        } 
     } 

//Making React class for app to hold container.
class App extends React.Component{
  render(){
    return(
          <div className="container">
              <SideBar />
              <Main />
          </div>
        )
  }
}

//Rendering React container.
ReactDOM.render(
  <App />,
  document.querySelector('.mainContainer')
);
