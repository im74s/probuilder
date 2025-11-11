# Admin Panel Guide

Quick reference for managing the Pro Builder admin panel.

## Access

**Admin Email**: `anshforgame4@gmail.com`

Only this email has admin access. Sign in with Google using this account.

## Dashboard Overview

### Left Sidebar - Conversation List

Shows all user conversations with:
- **User ID**: 4-digit unique identifier (e.g., 5938)
- **Email**: User's Google email
- **Status**: Current phase (Describing/Building/Completed)
- **Progress**: Percentage complete
- **Red Dot**: Indicates pinned/active conversations

**Sorting**:
- Pinned conversations appear at top
- Sorted by most recently updated

### Right Panel - Chat Interface

When you select a conversation:
- Full message history
- User messages (cyan bubbles)
- Bot messages (dark bubbles)
- Your messages (purple bubbles)
- Build percentage control

## Common Tasks

### 1. View New Build Requests

**Pinned conversations** (red dot) indicate users who clicked "Build Now":
1. These appear at the top of the list
2. Their description is 100% complete
3. Build percentage starts at 1%

### 2. Update Build Progress

1. Select a conversation
2. Find the percentage input field (top right)
3. Enter new percentage (0-100)
4. Click "Update %" button

**Automatic Messages**:
- When you set it to 100%, bot sends: "Your app is ready! The admin will send you the APK file shortly."

### 3. Send Messages to Users

1. Select a conversation
2. Type your message in the textarea (bottom)
3. Press Enter or click Send button
4. Message appears in purple bubble

**Use Cases**:
- Ask clarifying questions
- Provide updates
- Request additional information
- Notify about completion

### 4. Upload Files (APK/Documents)

1. Select a conversation
2. Click the upload button (📎 icon)
3. Choose file (APK, ZIP, or PDF)
4. File uploads automatically
5. Message sent with download link

**Best Practices**:
- Upload final APK when build is 100%
- Include version number in messages
- Test APK before uploading

### 5. Pin/Unpin Conversations

1. Click the message icon on conversation card
2. Red dot appears when pinned
3. Pinned items move to top

**When to Pin**:
- User started build process
- Urgent requests
- Active builds
- Priority users

## Workflow Example

### Typical User Journey

**Day 1**:
1. User signs up → Appears in your list
2. User describes app → Percentage increases
3. User reaches 100% → Clicks "Build Now"
4. Conversation gets pinned with red dot

**Day 2**:
1. You open pinned conversation
2. Review complete description
3. Send message: "Starting your build today!"
4. Update build to 10%

**Day 3-5**:
1. Continue building
2. Update percentage daily (30%, 50%, 70%)
3. Send progress updates

**Day 6**:
1. Build complete
2. Update to 100% (auto-message sent)
3. Upload APK file
4. Send: "Your app is ready! Download the APK above."

**Day 7**:
1. User downloads and tests
2. Provide support if needed
3. Mark conversation as resolved

## Message Examples

### Starting Build
```
"Hi! I've reviewed your app description and will start building today. Estimated completion: 5-7 days."
```

### Mid-Build Update
```
"Progress update: Core features are complete. Working on the UI now. Currently at 60%."
```

### Requesting Clarification
```
"Quick question: You mentioned user profiles. Should users be able to upload profile pictures?"
```

### App Ready
```
"Your app is ready! I've uploaded the APK file above. Please download and test it. Let me know if you need any changes."
```

### Issue Found
```
"Found a small issue with the login flow. Fixing it now. Build temporarily at 85% while I resolve this."
```

## Tips & Best Practices

### Communication
- Respond within 24 hours
- Be clear and professional
- Set realistic timelines
- Provide regular updates

### Progress Updates
- Update percentage at least daily
- Don't jump too quickly (users like to see progress)
- Common timeline:
  - Days 1-2: 10-30%
  - Days 3-4: 40-60%
  - Days 5-6: 70-90%
  - Day 7: 100% + APK

### File Management
- Name APKs clearly: `appname-v1.0.apk`
- Test before uploading
- Keep backup copies
- Document version changes

### Description Analysis
Review user descriptions for:
- Core features needed
- Design preferences
- Target audience
- Technical requirements
- Platform (Android/iOS)

### Priority Management
Pin conversations that need:
- Immediate attention
- Active development
- User follow-up
- Complex requirements

## Keyboard Shortcuts

- **Enter**: Send message (in textarea)
- **Shift+Enter**: New line in message

## Troubleshooting

### Can't see a conversation
- Check if you're logged in as admin
- Verify user has sent messages
- Refresh the page

### File won't upload
- Check file size (max 50MB recommended)
- Verify file format (APK, ZIP, PDF)
- Ensure stable internet connection

### Percentage won't update
- Enter valid number (0-100)
- Click "Update %" button
- Check for error messages

### Messages not sending
- Check internet connection
- Verify conversation is selected
- Refresh page and try again

## Status Reference

### Describing
- User is still writing app description
- Completion percentage: 0-99%
- Not yet pinned
- No build work needed yet

### Building
- User clicked "Build Now"
- Description 100% complete
- Conversation is pinned
- Build percentage: 1-99%
- Your active work

### Completed
- Build percentage: 100%
- APK uploaded (typically)
- User has received app
- May still need support

## Real-time Features

Everything updates automatically:
- New messages appear instantly
- Percentage changes sync immediately
- New conversations show up live
- Pin status updates in real-time

**No refresh needed** - just keep the panel open.

## Best Times to Work

Optimize your workflow:
- **Morning**: Review new requests, send initial messages
- **Afternoon**: Update build progress, respond to questions
- **Evening**: Upload completed APKs, final checks

## Support Workflow

When users report issues:
1. Read their description of the problem
2. Test the APK yourself
3. Update build percentage if fixing
4. Send acknowledgment message
5. Fix and re-upload
6. Notify user of fix

---

**Remember**: You're building someone's dream app. Professional communication and regular updates make all the difference!
