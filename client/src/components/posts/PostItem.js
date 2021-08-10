import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { Link } from 'react-router-dom';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({post: {_id, user, name, avatar, text, likes, comments, date }, auth, addLike, removeLike, deletePost, showActions }) => {
    return (
        <div className="post bg-white p-1 my-1">
          <div>
            <a href="profile.html">
              <img
                className="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </a>
          </div>
          <div>
            <p className="my-1">
              {text && (<span>{text}</span>)}
            </p>
             <p className="post-date">
                {formatDate(date)}
            </p>

            {showActions && (<Fragment>
              <button onClick={e => addLike(_id)} type="button" className="btn btn-light">
              <i className="fas fa-thumbs-up"></i>
                {likes.length > 0 && (<span>{' '}{likes.length}</span>)}
              </button>
              <button onClick={e => removeLike(_id)} type="button" className="btn btn-light">
                <i className="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} className="btn btn-primary">
                Discussion {comments.length > 0 && (<span className='comment-count'>{comments.length}</span>)}
              </Link>
              {!auth.loading && auth.user._id === user && (
                <button onClick={e => deletePost(_id)} type="button" className="btn btn-danger">
                  <i className="fas fa-times"></i>
                </button>
            )}
            </Fragment>)}
            
          </div>
        </div>
    )
}

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);
