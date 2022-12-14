import React, { Component } from "react";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import "./MovieInfo.css";
import { fetchMoviesData } from "../../api-calls";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

class MovieInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      movie: null,
      videos: null,
      id: props.id,
      error: null,
    };
  }

  componentDidMount = () => {
    fetchMoviesData(`/${this.state.id}`)
      .then((data) => this.setState({ movie: data.movie }))
      .catch((err) => {
        this.setState({ error: err });
      });

    fetchMoviesData(`/${this.state.id}/videos`)
      .then((data) => {
        this.setState({ videos: data.videos });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };

  mapVideos() {
    const videosTrailers = this.state.videos.map((movie) => {
      if (movie.site === "Vimeo") {
        let url = `https://player.vimeo.com/video/${movie.key}`;
        return (
          <SwiperSlide className="swiper-slide" key={movie.id}>
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              className="trailer"
              controls={true}
              key={movie.id}
            />
          </SwiperSlide>
        );
      } else {
        let url = `https://www.youtube-nocookie.com/embed/${movie.key}`;
        return (
          <SwiperSlide className="swiper-slide" key={movie.id}>
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              className="trailer"
              controls={true}
              key={movie.id}
            />
          </SwiperSlide>
        );
      }
    });
    return videosTrailers;
  }

  checkForGenre = () => {
    if (this.state.movie.genres.length) {
      return this.state.movie.genres.join(", ");
    } else {
      return "No genre available";
    }
  };

  formatDollarFigure = (property) => {
    const amount = parseInt(property);
    const numFor = Intl.NumberFormat("en-US");
    const formattedAmount = numFor.format(amount);

    if (property === 0) {
      return "No public record";
    } else {
      return `$${formattedAmount}`;
    }
  };
  styleBackdrop = () => {
    if (
      this.state.movie.backdrop_path ===
      "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg"
    ) {
      return {
        background: "#2d3a3a",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      };
    } else {
      return {
        backgroundImage: `url(${this.state.movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      };
    }
  };

  render = () => {
    if (!this.state.movie) {
      return <ErrorHandle errorStatus={this.state.error} />;
    }

    return (
      <main>
        <div className="movie-detail-container" style={this.styleBackdrop()}>
          <section className="movie-detail-section">
            <div className="movie-info-container">
              <div className="movie-poster-container">
                <div className="movie-poster">
                  <img src={this.state.movie.poster_path} alt={this.state.movie.title}></img>
                </div>
              </div>
              <div className="movie-description-container">
                <h2 className="movie-title"> {this.state.movie.title}</h2>
                <p className="release-date"> Release Date: {this.state.movie.release_date}</p>
                <p className="overview">{this.state.movie.overview}</p>
                <p className="avg-rating">
                  {" "}
                  Rancid Rating: {parseInt(this.state.movie.average_rating).toFixed(0)}{" "}
                </p>
                <p className="genre"> Genre: {this.checkForGenre()}</p>
                <p className="budget">
                  {" "}
                  Budget: {this.formatDollarFigure(this.state.movie.budget)}
                </p>
                <p className="revenue">
                  {" "}
                  Revenue: {this.formatDollarFigure(this.state.movie.revenue)}
                </p>
                <p className="runtime"> Runtime: {this.state.movie.runtime} Minutes </p>
                <p className="tagline">{this.state.movie.tagline}</p>
              </div>
            </div>
            <div className="video-container">
              {this.state.videos && (
                <Swiper
                  modules={[Navigation, Scrollbar, Keyboard]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  keyboard
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {this.mapVideos()}
                </Swiper>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  };
}

export default MovieInfo;
