class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :image, :name, :per_night
end
