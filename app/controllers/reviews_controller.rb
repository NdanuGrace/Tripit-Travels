class ReviewsController < ApplicationController

    def index
        reviews = Review.all
        render json: reviews, status: :ok
      end
    
      def show
        review = Review.find(params[:id])
        render json: review, status: :ok
      end
    
      def create
        render json: Review.create!(review_params), status: :created
      end
    
      def update
        review = Review.find(params[:id])
        render json: review.update!(review_params), status: :created
      end
    
      def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
      end
    
      def user_reviews
        current_user_reviews = Review.joins(:user).where(:user => {:id => params[:id]})
        render json: current_user_reviews
      end
    
      private
    
      def review_params
        params.permit(:content, :user_id, :destination_id)
      end
end
