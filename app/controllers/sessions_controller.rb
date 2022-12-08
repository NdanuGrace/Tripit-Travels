class SessionsController < ApplicationController
        # skip_before_action :authorize, only: :create, :destroy
      

        def create
          user = User.find_by(username: params[:username])
          if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
          else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
          end
      end

        def destroy
          return render json: {errors:["Not authorized"]}, status: :unauthorized unless session.include? :user_id
          session.delete :user_id
          render json: {} 
        end
      
  
      
end
