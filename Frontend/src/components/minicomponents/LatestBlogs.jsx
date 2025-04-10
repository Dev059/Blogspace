import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LatestBlogs = ({ heading, newClass, blogs }) => {
  return (
    <section className={newClass?.length > 0 ? "dashboard-blogs blogs" : "blogs"}>
      <h3>{heading}</h3>

      <div className="container">
        {blogs && blogs.length > 0 ? (
          blogs.map((element) => (
            <Link to={`/blog/${element._id}`} className="card" key={element._id}>
              <img src={element.mainImage?.url || "/placeholder.png"} alt="blog" />
              <span className="category">{element.category}</span>
              <h4>{element.title}</h4>
              <div className="writer_section">
                <div className="author">
                  <img src={element.authorAvatar || "/avatar.png"} alt="author_avatar" />
                  <p>{element.authorName}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs to display.</p>
        )}
      </div>
    </section>
  );
};

LatestBlogs.propTypes = {
  heading: PropTypes.string,
  newClass: PropTypes.string,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string,
      }),
      category: PropTypes.string,
      title: PropTypes.string,
      authorAvatar: PropTypes.string,
      authorName: PropTypes.string,
    })
  ),
};

export default LatestBlogs;
