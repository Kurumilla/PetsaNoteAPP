class NotesController < ApplicationController
  before_action :set_note, only: %i[ show edit update destroy ]

  def index
    @notes = Note.all
    
    case params[:order]
    when 'newest_first'
      @notes = @notes.order(created_at: :desc)
    when 'oldest_first'
      @notes = @notes.order(created_at: :asc)
    when 'alphabetical_asc'
      @notes = @notes.order(:title)
    when 'alphabetical_desc'
      @notes = @notes.order(title: :desc)
    else
      @notes = @notes.order(created_at: :desc)
    end
    
    if params[:query].present?
      @notes = @notes.search_by_query(params[:query])
    end
  
    @grouped_notes = @notes.group_by { |note| note.created_at.strftime('%B %Y') }
  end
  
  

  def show
  end

  def new
    @note = Note.new
  end

  def edit
  end

  def create
    @note = Note.new(note_params)
  
    respond_to do |format|
      if @note.save
        format.html { redirect_to note_url(@note), notice: t('notes.created') }
        format.json { render :show, status: :created, location: @note }
      else
        flash.now[:alert] = @note.errors.full_messages.to_sentence
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @note.update(note_params)
        format.html { redirect_to note_url(@note), notice: t('notes.updated') }
        format.json { render :show, status: :ok, location: @note }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @note.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @note.destroy
    respond_to do |format|
      format.html { redirect_to notes_url, notice: t('notes.deleted') }
      format.json { head :no_content }
    end
  end

  private

  def set_note
    @note = Note.find(params[:id])
  end

  def note_params
    params.require(:note).permit(:title, :body)
  end
end
