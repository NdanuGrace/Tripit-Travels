class UsersController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index, :create]
  # rescue_from ActiveRecord::RecordInvalid, with: :valid_user


  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find_by(id: session[:user_id])
        session[:user_id] = user.id
        render json: user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
end

  def update
    user = User.find(params[:id])
    render json: user.update!(user_params), status: :created
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name, :username, :email, :password, :password_confirmation)

  end
  def authorize
    return render json:{error:"Not authorized"}, status: :unauthorized unless session.include? :user_id
  end
#   def valid_user(valid)
#     render json:{errors: valid.record.errors.full_messages}, status: :unprocessable_entity
# end

end


