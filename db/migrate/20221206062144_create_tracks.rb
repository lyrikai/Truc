class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.string :title
      t.string :inputs
      t.integer :duration

      t.timestamps
    end
  end
end
