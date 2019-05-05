var showSecret = false;

clickBtn.addEventListener('click', toggleSecretState);
updateSecretParagraph();

function toggleSecretState() 
{
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() 
{
    if (showSecret === true) 
    {
        clickBtn.textContent = 'Hide my Secret';
    } else {
        clickBtn.textContent = 'Show my Secret';
    }
}

function updateSecretParagraph() 
{
    if (showSecret === true) 
    {
        theParagraph.style.display = 'block';
    } else {
        theParagraph.style.display = 'none';
    }
}