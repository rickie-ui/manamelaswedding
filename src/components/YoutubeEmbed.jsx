import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="360"
      height="215"
      src={`https://www.youtube.com/embed/${embedId}?si=94LATp1liLj6kLCq`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
