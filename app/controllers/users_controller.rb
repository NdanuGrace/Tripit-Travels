class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def index
    render json: User.all, status: :ok
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

    def create
      user = User.create(user_params)
      if user.valid?
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
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
    params.permit(:name, :username, :email, :password_digest)

  end

end


