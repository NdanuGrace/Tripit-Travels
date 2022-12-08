class User < ApplicationRecord
    has_secure_password

    has_many :visits 
    has_many :destinations, through: :visits
    has_many :reviews


    # validates :username, presence: true, uniqueness: true
    # validates :name, presence: true
    # validates :email, presence: true
end
