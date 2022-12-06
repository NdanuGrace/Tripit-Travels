class DestinationReviewSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :image, :name
  has_many :reviews
end
