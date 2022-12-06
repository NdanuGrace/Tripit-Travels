class VisitSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :destination_id, :user_id
end
