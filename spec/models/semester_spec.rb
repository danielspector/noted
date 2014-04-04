require 'spec_helper'

describe Semester do
  before(:each) do
    @semester = Semester.new(name: "Ruby 004")
  end
  it "should have a name" do
    expect(@semester).to be_valid
  end

  it "should have many videos" do
    @semester.save
    video = Video.new(name: "Ruby Lecture")
    @semester.videos << video
    expect(@semester.videos).to include(video)
  end

  it "should require a name" do
    expect(Semester.new(name: nil)).to have(1).errors_on(:name)
  end
end