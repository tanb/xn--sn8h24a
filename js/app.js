// Generated by CoffeeScript 1.6.3
(function() {
  var MainView, MainViewController,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MainView = (function(_super) {
    __extends(MainView, _super);

    function MainView() {
      var frame, githubBtnFrame;
      MainView.__super__.constructor.apply(this, arguments);
      this.imageView = new BNImageView();
      frame = {
        x: 0,
        y: 0,
        width: 45,
        height: 45
      };
      this.imageView.frame = frame;
      this.imageView.src = '/img/logo.png';
      this.imageView.circularize = true;
      this.addSubview(this.imageView);
      this.githubBtn = new BNButton();
      this.githubBtn.setTitle("tanB's Github Profile");
      githubBtnFrame = {
        x: 0,
        y: 0,
        width: 160,
        height: 35
      };
      this.githubBtn.frame = githubBtnFrame;
      this.addSubview(this.githubBtn);
    }

    MainView.prototype.layoutSubviews = function() {
      var githubBtnFrame, githubBtnX, githubBtnY, imgFrame, imgX, imgY;
      MainView.__super__.layoutSubviews.apply(this, arguments);
      imgX = (this.frame.width - this.imageView.frame.width) / 2;
      imgY = (this.frame.height - this.imageView.frame.height) / 2;
      imgFrame = this.imageView.frame;
      imgFrame.x = imgX;
      imgFrame.y = imgY;
      this.imageView.frame = imgFrame;
      githubBtnX = this.frame.width - this.githubBtn.frame.width - 8;
      githubBtnY = 8;
      githubBtnFrame = this.githubBtn.frame;
      githubBtnFrame.x = githubBtnX;
      githubBtnFrame.y = githubBtnY;
      return this.githubBtn.frame = githubBtnFrame;
    };

    return MainView;

  })(BNView);

  MainViewController = (function(_super) {
    __extends(MainViewController, _super);

    function MainViewController() {
      MainViewController.__super__.constructor.apply(this, arguments);
    }

    MainViewController.prototype.loadView = function() {
      var myView;
      MainViewController.__super__.loadView.apply(this, arguments);
      myView = new MainView();
      return this.view = myView;
    };

    MainViewController.prototype.viewDidLoad = function() {
      var self;
      MainViewController.__super__.viewDidLoad.apply(this, arguments);
      self = this;
      $(window).bind('resize', function(event) {
        return self.resizeWindow(event);
      });
      return this.view.githubBtn._$elm.bind('click', function(event) {
        return location.href = 'http://github.com/tanb';
      });
    };

    MainViewController.prototype.resizeWindow = function(event) {
      return this.layoutSubviews();
    };

    return MainViewController;

  })(BNViewController);

  $(document).ready(function() {
    window.viewController = new MainViewController();
    return window.addSubview(viewController.view);
  });

}).call(this);
