class DestinationsController < ApplicationController
    def index
        destinations = Destination.all
        render json: destinations
      end
    
      def show
        destination = Destination.find(params[:id])
        render json: destination, serializer: DestinationReviewSerializer, status: :ok
      end
private
      def house_params
        params.permit(:location, :description, :image, :name, :per_night)
      end
end
