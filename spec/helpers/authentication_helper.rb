module AuthenticationHelper
  def login(user)
    post user_session_path, { email: user.email, password: user.password }
  end
end