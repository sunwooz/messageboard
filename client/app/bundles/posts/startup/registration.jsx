import ReactOnRails from 'react-on-rails';

import PostList from '../components/PostList';
import PostContainer from '../containers/PostContainer';
import CreatePostButton from '../components/CreatePostButton';
import IndexPostContainer from '../containers/IndexPostContainer';
import Header from '../containers/Header';
import ShowPostContainer from '../containers/ShowPostContainer';
import CommentsContainer from '../containers/CommentsContainer';
import Comment from '../components/Comment';
import Post from '../components/Post';

ReactOnRails.register({
  IndexPostContainer,
  Header,
  PostList,
  CreatePostButton,
  PostContainer,
  ShowPostContainer,
  CommentsContainer,
  Comment,
  Post
});