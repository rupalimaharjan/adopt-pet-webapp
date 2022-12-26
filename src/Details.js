import { useParams } from "react-router-dom";
import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Model";
/*
{ 
loading:false,
 name:luna,
 city:nepal,
 soone
}
*/

class Details extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }

  //able to write this due to class properties that we installed
  //
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.paramsss.pet_id}`
    );
    const json = await res.json();
    console.log(json);
    this.setState({ loading: false, ...json.pets[0] });
    console.log(this.state);
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loding ...</h2>;
    }
    // throw new Error("LMAO you crashed");

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city} , {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a
                    href="https://bit.ly/pet-adopt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yes
                  </a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

//the reason for doing this
//only way to get params from react router is by
//using use params so (this is like HOC)
//class cant use hooks
//paila paila withrouter vanni theyo tyo remove for class
const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details paramsss={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
