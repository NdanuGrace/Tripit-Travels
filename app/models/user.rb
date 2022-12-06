class User < ApplicationRecord
    has_many :visits 
    has_many :houses, through: :visits
    has_many :reviews
end
