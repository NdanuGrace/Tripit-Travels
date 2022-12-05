class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :destination_id
end
