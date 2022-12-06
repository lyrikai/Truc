class DrumkitController < ApplicationController

    def index
        @track = Track.all
    end

    def create
        puts "-" * 60
        puts params[:input]
        puts "-" * 60
        if params[:input]
            track = Track.new(title: params[:title], inputs: params[:input], duration: 30)
            puts "-" * 60
            puts track

            if track.save
                redirect_back(fallback_location: root_path)
            end
        end
        if params[:fusioninput]
            track = Track.new(title: params[:title], inputs: params[:fusioninput], duration: 30)
            puts "-" * 60
            puts track

            if track.save
                redirect_back(fallback_location: root_path)
            end
        end
    end
end
