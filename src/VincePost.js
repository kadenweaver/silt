import {Component} from 'react';
import {Button} from 'semantic-ui-react';
import './App.css';
import { BiLeftArrowCircle } from 'react-icons/bi';


class VincePost extends Component {

    render() {
        return (
            <div>
                <Button className='post-back-button' onClick={this.props.onClosePost}>
                    <BiLeftArrowCircle className='back-button-icon'/>
                    Back to Music
                </Button>
                <h2>Staples Released An Album Of Mellow Sampled Raps, Finally Living Up To His Potential</h2>
                <p>Friday, August 20 2021</p>
                <div className="post-spot-container">
                    <iframe className="post-spot-player" src="https://open.spotify.com/embed/playlist/2gymXGRl1CLdN1mAdyZtIE?si=lbiG8wJ3TAuGskheN2jQng&dl" width="300" height="380"
                            frameBorder="0" allowTransparency="true" allow="encrypted-media">
                    </iframe>
                </div>
                <div className="text-container">
                    <p>
                        Vince Staples is a rare example of an artist that has plenty of powerful singles without having released a solid album. I first started listening to him with the track "Norf Norf" from his debut album, Summertime '06. The California native introduced himself there with a unique identity, something he maintained through his subsequent works. Memorable opening lines like "Bitch, you thirsty? Please, grab a Sprite" and clear allusions to his adolescence in Long Beach would stick from there on out.
                    </p>
                    <p>
                        These elements hinted at a rapper with great potential:  someone who has a story to tell, but doesn't take themselves seriously enough to shy away from the corny side of rap. What followed was a couple of club singles and not much else. Staples released "Big Fish" and "FUN!", two colossal hits that still let him down in terms of overall acclaim. I watched Vince open for Tyler, the Creator in February of 2018, soon thereafter the rapper started a pity party GoFundMe to address criticisms of his live performances. Other tracks like "745" and "Yeah Right" weren't enough to supplement his hits, and his delivery in concert was lackluster at best.
                    </p>
                    <p>
                        In the three years since his last album, Staples has clearly dedicated more time than ever to his eponymous work. With producer Kenny Beats drafting a somber yet curious soundscape for the album, Staples rhymes with an experienced certainty, detailing his life from a more mature perspective. "This is another take on myself that I might not have had before," claims the Long Beach native. With the help of Beats, as well as vocals from producer Reske and singer Fousheé, he can be confident that this will stand as his most complete work yet.
                    </p>
                </div>

            </div>
        );
    }
}

export default VincePost;

