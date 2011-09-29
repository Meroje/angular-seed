/* App Controllers */

function BuzzController(BuzzService, $route) {
    this.$route = $route;
	this.Activity = BuzzService;

	this.$watch('$route.current.params.userId', this.userChange);
}

BuzzController.prototype = {
	userChange : function() {
		this.userId = this.$route.current.params.userId;
        if (this.userId !== '')
            this.activities = this.Activity.get({
                userId : this.userId
            });
	},

	expandReplies : function(activity) {
		if (activity.replies) {
			activity.replies.show = !activity.replies.show;
		} else {
			activity.replies = this.Activity.replies({
				userId : this.userId,
				activityId : activity.id
			}, function() {
				activity.replies.show = true;
			});
		}
	}
<<<<<<< HEAD
=======
};

function YoutubeController(YoutubeService, $route) {
    this.$route = $route;
    this.Youtube = YoutubeService;

	this.$watch('$route.current.params.userId', this.userChange);
}

YoutubeController.prototype = {
    userChange : function() {
		this.userId = this.$route.current.params.userId;
        if (this.userId !== '')
            this.videos = this.Youtube.get({
                userId : this.userId
            });
        console.log(this.videos);
	}
>>>>>>> master
};