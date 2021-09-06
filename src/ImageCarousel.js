import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import {React, Component} from "react";
import { Divider, Container } from "semantic-ui-react";
import lineup from './lineup.png';
import lineup1 from './lineup1.png';
import lineup2 from './lineup2.png';
import CustomDotGroup from "./CustomDotGroup";
/*
<p>Madi's attempt to pick the brain of Tommy Tuchel, her 11 includes Kanye and Pulli.</p>
<p>My guess at the XI...the official shape isn't right but I was 10/11 for players on the pitch</p>
<p>The actual formation / team. This shape certainly didn't hold throughout the game, with Werner and Mount making runs at City's defense to open up chances</p>

*/

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {slideIndex: 0};
  }
  render() {
    const {slideIndex} = this.state;
     return (
        <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={3}
        >
          <Slider>
            <Slide tag="a" index={0}>
              <Image isBgImage src={lineup1} />
            </Slide>
            <Slide tag="a" index={1}>
              <Image src={lineup} />
            </Slide>
            <Slide tag="a" index={2}>
              <Image src={lineup2} />
            </Slide>
          </Slider>

          <Divider />
          <div>
            <div style={{display: slideIndex === 0 ? 'inline-block':'none'}}>Madi's Lineup</div>
            <div></div>
            <div></div>
          </div>
          <Divider/>
          <CustomDotGroup clickFunction={this.handleIndexChanged} slides={3} />
        </CarouselProvider>
    );
  }

  handleIndexChanged = (index) => {
    this.setState({slideIndex: index});
  }
}

//);

export default ImageCarousel;
