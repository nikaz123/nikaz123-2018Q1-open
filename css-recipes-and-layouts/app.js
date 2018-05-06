let questionButton = document.getElementById("questionBtn"),
    attentionButton = document.getElementById("attentionBtn");


let questionBlock = document.getElementById("question-block"),
    attentionBlock = document.getElementById("attention-block");


let tagsButton = document.getElementById("tags-button"),
    tagsBlock = document.getElementById("aside-tags");


//event for button "question"
questionBtn.onfocus = function () {
    questionBlock.classList.add("block-flex");
};
questionBtn.onblur = function () {
    questionBlock.classList.remove("block-flex");
};

//event for button "attention"
attentionBtn.onfocus = function () {
    attentionBlock.classList.add("block-flex");
};
attentionBtn.onblur = function () {
    attentionBlock.classList.remove("block-flex");
};

// tags aside
tagsButton.onfocus = function () {
    tagsBlock.classList.add("block-visible");
};

tagsButton.onblur = function () {
    tagsBlock.classList.remove("block-visible");
};





let captionsListButton = document.getElementById("main-navigation-list");


let captionsContainer = document.getElementById("main-captions");



//event for button "captions"
    captionsListButton.onfocus = function () {
    captionsContainer.classList.add("captions-container-block");
};
captionsListButton.onblur = function () {
    captionsContainer.classList.remove("captions-container-block");
};



