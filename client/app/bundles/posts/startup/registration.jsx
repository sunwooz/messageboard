import ReactOnRails from 'react-on-rails';

import PostList from '../components/PostList';
import Post from '../components/Post';
import CreatePostButton from '../components/CreatePostButton';
import PostContainer from '../containers/PostContainer';
import Header from '../components/Header';
import ShowPostContainer from '../containers/ShowPostContainer';
import CommentsContainer from '../containers/CommentsContainer';
import Comment from '../components/Comment';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  PostContainer,
  Header,
  PostList,
  CreatePostButton,
  Post,
  ShowPostContainer,
  CommentsContainer,
  Comment
});