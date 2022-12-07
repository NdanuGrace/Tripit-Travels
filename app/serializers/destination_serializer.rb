class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :name, :per_night, :location, :description, :image
end
