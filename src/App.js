import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      show: false,
      x: "Show",
      Person: {
        fullName: "Neit Addi Mariem",
        bio: "GoMyCode student",
        imgSrc: "mariem.jpg",
        profession: "full-stack developer",
      },
    };
  }

  handleClick = () => {
    this.setState({ show: !this.state.show, time: 0 });
    if (this.state.show === false) {
      this.setState({ show: true });
      this.setState({ x: "Hide" });
    } else if (this.state.show === true) {
      this.setState({ show: false });
      this.setState({ x: "Show" });
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  }
  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;

    return (
      <div className="all">
        <div className={this.state.show ? "visible" : "hide"}>
          <div className="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <img src={imgSrc} />
                  </div>
                  <div class="col-md-6">
                    <p> Hi ! my name is {fullName}</p>

                    <p> {bio}</p>
                    <p>
                      I'm <span>{profession}</span>
                    </p>
                    <h2>
                      <span class="noselect">{this.state.time}</span>
                      <div id="circle"></div>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="visible">
          <div id="btn" onClick={this.handleClick}>
            <span class="noselect">{this.state.x}</span>
            <div id="circle"></div>
          </div>
        </div>
      </div>
    );
  }
}
