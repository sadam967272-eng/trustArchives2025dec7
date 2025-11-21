import os
import shutil

def move_assets():
    assets = ['css', 'js', 'img', 'fonts', 'files']
    public_dir = 'public'

    if not os.path.exists(public_dir):
        os.makedirs(public_dir)
        print(f"Created {public_dir} directory")

    for asset in assets:
        if os.path.exists(asset):
            target = os.path.join(public_dir, asset)
            if os.path.exists(target):
                print(f"Removing existing {target}")
                shutil.rmtree(target)
            
            print(f"Moving {asset} to {target}")
            shutil.move(asset, target)
        else:
            print(f"{asset} not found in root")

if __name__ == "__main__":
    move_assets()
