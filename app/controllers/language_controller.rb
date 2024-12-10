class LanguageController < ApplicationController
  def set
    cookies[:language] = params[:language]
    redirect_back(fallback_location: root_path)
  end
end
