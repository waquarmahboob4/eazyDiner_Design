import './App.css';
import AdditionalOffers from './Component/Additional Offers/AdditionalOffers';

function App() {
  return (
    <div className="App">
     <AdditionalOffers data={[{name:'Axis Bank',image:'https://www.axisbank.com/images/default-source/gallery/gallery_img1.jpg',content:' Flat 25% off* at INOX on Movie tickets and Food & Beverages Master Card of Axis Bank'},{name:'Eazy Diner',image:'https://d4t7t8y8xqo0t.cloudfront.net/resized/120X120/author%2Feditorial-team-20170314105334.jpg',content:' Flat 25% off* at INOX on Movie tickets and Food & Beverages Master Card of Axis Bank'},{name:'Axis Bank',image:'https://www.axisbank.com/images/default-source/gallery/gallery_img1.jpg',content:' Flat 25% off* at INOX on Movie tickets and Food & Beverages Master Card of Axis Bank'},{name:'Eazy Diner',image:'https://d4t7t8y8xqo0t.cloudfront.net/resized/120X120/author%2Feditorial-team-20170314105334.jpg',content:' Flat 25% off* at INOX on Movie tickets and Food & Beverages Master Card of Axis Bank'}]}/>
    </div>
  );
}

export default App;
